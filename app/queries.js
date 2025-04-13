/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getScanRecord = /* GraphQL */ `
  query GetScanRecord($id: ID!) {
    getScanRecord(id: $id) {
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
export const listScanRecords = /* GraphQL */ `
  query ListScanRecords(
    $filter: ModelScanRecordFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listScanRecords(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        timestamp
        memo
        userName
        email
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      userName
      email
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userName
        email
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
