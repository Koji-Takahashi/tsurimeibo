/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createScanRecord = /* GraphQL */ `
  mutation CreateScanRecord(
    $input: CreateScanRecordInput!
    $condition: ModelScanRecordConditionInput
  ) {
    createScanRecord(input: $input, condition: $condition) {
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
export const updateScanRecord = /* GraphQL */ `
  mutation UpdateScanRecord(
    $input: UpdateScanRecordInput!
    $condition: ModelScanRecordConditionInput
  ) {
    updateScanRecord(input: $input, condition: $condition) {
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
export const deleteScanRecord = /* GraphQL */ `
  mutation DeleteScanRecord(
    $input: DeleteScanRecordInput!
    $condition: ModelScanRecordConditionInput
  ) {
    deleteScanRecord(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      userName
      email
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      userName
      email
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      userName
      email
      createdAt
      updatedAt
    }
  }
`;
