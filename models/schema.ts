
export type Schema = {
    ScanRecord: {
      fields: {
        id: string;
        userId?: string;
        timestamp?: string;
        memo?: string;
        createdAt?: string;
        updatedAt?: string;
      };
      model: {
        id: string;
        userId?: string;
        timestamp?: string;
        memo?: string;
        createdAt?: string;
        updatedAt?: string;
      };
    };
  };