'use client';

import { useEffect, useState, useCallback } from 'react';
import { MarketSnapshot } from '@/components/ui/market-snapshot';
import { getMarketQuotes, getStaticMarketData } from '@/lib/market-api';
import { RefreshCw } from 'lucide-react';

const SYMBOLS_TO_TRACK = ['NIFTY50', 'SENSEX', 'BANKNIFTY', 'SPX', 'DJI', 'IXIC', 'GOLD', 'USDINR'];

interface MarketData {
  name: string;
  value: number;
  change: number;
  changePercent: number;
  icon: 'chart';
}

export function StockMarketDashboard() {
  const [data, setData] = useState<MarketData[]>([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<string>('');

  type QuoteRecord = Record<string, unknown>;
  const transformData = useCallback((quotes: Map<string, unknown> | QuoteRecord) => {
    const source: QuoteRecord = quotes instanceof Map ? (Object.fromEntries(quotes) as QuoteRecord) : (quotes as QuoteRecord);
    return SYMBOLS_TO_TRACK.map(symbol => {
      const raw = source[symbol] as Partial<{
        symbol: string;
        price: number;
        value: number;
        change: number;
        changePercent: number;
      }> | undefined;
      if (!raw) return null;
      return {
        name: raw.symbol ?? symbol,
        value: Number(raw.price ?? raw.value ?? 0),
        change: Number(raw.change ?? 0),
        changePercent: Number(raw.changePercent ?? 0),
        icon: 'chart' as const
      };
    }).filter((item): item is MarketData => Boolean(item));
  }, []);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const quotes = await getMarketQuotes(SYMBOLS_TO_TRACK);
      if (quotes && quotes.size > 0) {
        setData(transformData(quotes));
        setLastUpdated(new Date().toLocaleTimeString());
      } else {
        // Fallback to static data if API fails completely
        setData(transformData(getStaticMarketData()));
      }
    } catch (error) {
      console.error('Failed to fetch market data:', error);
      setData(transformData(getStaticMarketData()));
    } finally {
      setLoading(false);
    }
  }, [transformData]);

  useEffect(() => {
    // Initial load with static data to avoid layout shift
    setData(transformData(getStaticMarketData()));
    fetchData();
    const interval = setInterval(fetchData, 300000); // 5 minutes
    return () => clearInterval(interval);
  }, [fetchData, transformData]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Market Dashboard</h2>
          <p className="text-muted-foreground">Live updates from major indices</p>
        </div>
        <button 
          onClick={fetchData}
          disabled={loading}
          className="p-2 rounded-full hover:bg-muted transition-colors disabled:opacity-50"          aria-label="Refresh market data"        >
          <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
        </button>
      </div>

      <MarketSnapshot 
        data={data} 
        lastUpdated={lastUpdated}
        className="bg-card"
      />
    </div>
  );
}
