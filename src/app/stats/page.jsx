import AnalyticsChart from '@/components/statsAnalytics/AnalyticsChart';
import React from 'react';

export const metadata = {
  title: "Keen Keeper | Stats",
};

const StatsPage = () => {
    return (
        <div>
            <AnalyticsChart/>
        </div>
    );
};

export default StatsPage;