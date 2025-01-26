import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const ChartsTest = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        type EChartsOption = echarts.EChartsOption;

        const chartDom = chartRef.current;
        if (!chartDom) return;

        var myChart = echarts.init(chartDom);
        var option;
        
        option = {
          title: {
            text: 'Referer of a Website',
            subtext: 'Fake Data',
            left: 'center',
            top: 'bottom',
            padding: 40,
          },
          tooltip: {
            trigger: 'item'
          },
          legend: {
            orient: 'vertical',
            left: 'left',
          },
          series: [
            {
              name: 'Access From',
              type: 'pie',
              radius: '50%',
              top: '10%',
              data: [
                { value: 1048, name: 'Search Engine' },
                { value: 735, name: 'Direct' },
                { value: 580, name: 'Email' },
                { value: 484, name: 'Union Ads' },
                { value: 300, name: 'Video Ads' }
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        };
        
        option && myChart.setOption(option);

        // 组件销毁时清除图表
        return () => {
            myChart.dispose();
        };
    }, []);

    return (
        <div className='grid'>
            {/* <div className='font-medium p-4'>
                Usage
            </div> */}
            <div ref={chartRef} style={{ width:'400px', height:'500px'}}></div>
        </div>
    );
};

export default ChartsTest;