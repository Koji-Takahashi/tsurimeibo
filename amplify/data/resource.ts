export type Schema = {
    ScanRecord: {
      model: {
        id: string;
        userId: string;
        timestamp: string;
        memo?: string;
      };
      fields: {
        id: string;
        userId: string;
        timestamp: string;
        memo?: string;
      };
    };
  };