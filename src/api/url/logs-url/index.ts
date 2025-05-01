import {
  IBarChartOptions,
  ITableDataOptions,
} from "@/api/function/logs-function";
import { buildApiUrl } from "@/utils/build-api-url";

export const totalEventsUrl: string = "/logs/total-events";

export const mostActiveIpUrl: string = "/logs/active-ip";

export const mostCommonMethodUrl: string = "/logs/common-method";

export const topHttpStatusCodeUrl: string = "/logs/http-status-code";

export const commonResponseSizeUrl: string = "/logs/response-size";

export const topAgentUrl: string = "/logs/user-agent";

export const getBarChartUrl = (options: IBarChartOptions) => {
  const url = buildApiUrl({
    module: "/logs/bar-chart-data",
    options: {
      date_option: options.dateOption,
      //   source: options.source,
    },
  });

  return url;
};

export const getTableDataUrl = (options: ITableDataOptions) => {
  const url = buildApiUrl({
    module: "/logs/log-data",
    options,
  });

  return url;
};
