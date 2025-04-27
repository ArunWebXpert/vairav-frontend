interface IUrl {
  module: string;
  options: {
    [key: string]: any;
  };
}

// builds url based upon provided options
export const buildApiUrl = (details: IUrl): string => {
  const filteredOptions = Object.fromEntries(
    Object.entries(details.options).map(([key, value]) => [key, value ?? ""])
  );

  const queryParams = new URLSearchParams(filteredOptions).toString();

  return `${details.module}?${queryParams}`;
};
