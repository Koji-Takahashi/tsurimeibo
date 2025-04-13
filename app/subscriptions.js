/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateScanRecord = /* GraphQL */ `
  subscription OnCreateScanRecord(
    $filter: ModelSubscriptionScanRecordFilterInput
  ) {
    onCreateScanRecord(filter: $filter) {
      id
      userId
      timestamp
      memo
      userName
      email
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateScanRecord = /* GraphQL */ `
  subscription OnUpdateScanRecord(
    $filter: ModelSubscriptionScanRecordFilterInput
  ) {
    onUpdateScanRecord(filter: $filter) {
      id
      userId
      timestamp
      memo
      userName
      email
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteScanRecord = /* GraphQL */ `
  subscription OnDeleteScanRecord(
    $filter: ModelSubscriptionScanRecordFilterInput
  ) {
    onDeleteScanRecord(filter: $filter) {
      id
      userId
      timestamp
      memo
      userName
      email
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      userName
      email
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      userName
      email
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      userName
      email
      createdAt
      updatedAt
    }
  }
`;
