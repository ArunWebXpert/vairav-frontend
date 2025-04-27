import {
  commonResponseSizeUrl,
  getBarChartUrl,
  getTableDataUrl,
  mostActiveIpUrl,
  mostCommonMethodUrl,
  topAgentUrl,
  topHttpStatusCodeUrl,
  totalEventsUrl,
} from "@/api/url/logs-url";
import {
  IActiveIpResponse,
  IBarChartResponse,
  ICommonMethodResponse,
  IResponseSizeResponse,
  ITopAgentResponse,
  ITopStatusCodeResponse,
  ITotalEventsResponse,
} from "@/interface";
import { ILogTableDataResponse } from "@/interface/response/log-stat/log-table-data.interface";

import axiosInstance from "@/services/axios";

// ip
export const getMostActiveIp = async (): Promise<IActiveIpResponse> => {
  const url = mostActiveIpUrl;

  const res = await axiosInstance.get(url);

  return res.data;
};

// total events
export const getTotalEvents = async (): Promise<ITotalEventsResponse> => {
  const url = totalEventsUrl;

  const res = await axiosInstance.get(url);

  return res.data;
};

// common method
export const getMostCommonMethod = async (): Promise<ICommonMethodResponse> => {
  const url = mostCommonMethodUrl;

  const res = await axiosInstance.get(url);

  return res.data;
};

// http status code
export const getTopHttpStatusCode =
  async (): Promise<ITopStatusCodeResponse> => {
    const url = topHttpStatusCodeUrl;

    const res = await axiosInstance.get(url);

    return res.data;
  };

//response size
export const getCommonResponseSize =
  async (): Promise<IResponseSizeResponse> => {
    const url = commonResponseSizeUrl;

    const res = await axiosInstance.get(url);

    return res.data;
  };

//agent
export const getTopAgent = async (): Promise<ITopAgentResponse> => {
  const url = topAgentUrl;

  const res = await axiosInstance.get(url);

  return res.data;
};

// ==================================================bar chart =================================================
export interface IBarChartOptions {
  dateOption: string;
  // source: string;
}

export const getBarChartData = async (
  options: IBarChartOptions
): Promise<IBarChartResponse> => {
  const url = getBarChartUrl(options);

  const res = await axiosInstance.get(url);

  return res.data;
};

// ============================================table data ==========================================================

export interface ITableDataOptions {
  search?: string;
  startDate?: string;
  endDate?: string;
}

export const getTableData = async (
  options: ITableDataOptions
): Promise<ILogTableDataResponse> => {
  const url = getTableDataUrl(options);

  const res = await axiosInstance.get(url);

  return res.data;
};
