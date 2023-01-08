/**
 * Configuration class needed in base class.
 * The config is provided to the API client at initialization time.
 * API clients inherit from #AuthorizedApiBase and provide the config.
 */
export interface IApiClientConfig {
  /**
   * Returns a valid value for the Authorization header.
   * Used to dynamically inject the current auth header.
   */
  getAuthorization: () => string;
}

export class ApiClientBase {
  private readonly config: IApiClientConfig;

  protected constructor(config: IApiClientConfig) {
    this.config = config;
  }

  protected transformOptions = (options: RequestInit): Promise<RequestInit> => {
    options.headers = {
      ...options.headers,
      Authorization: this.config.getAuthorization(),
    };
    return Promise.resolve(options);
  };
}
