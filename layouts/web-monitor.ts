import { useState, useEffect } from "react";

// 判断是否为Web模式（宽度超过900）
const isWebMode = (width: number): boolean => width >= 900;

// 自定义Hook用于监控设备宽度并判断是Web还是H5模式
const useWidthMonitor = (): boolean => {
  const [deviceWidth, setDeviceWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0,
  );

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setDeviceWidth(window.innerWidth);
      }
    };

    if (typeof window !== "undefined") {
      // 添加窗口大小变化的监听事件
      window.addEventListener("resize", handleResize);
    }

    // 在组件卸载时移除监听事件，避免内存泄漏
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return isWebMode(deviceWidth);
};

export default useWidthMonitor;
