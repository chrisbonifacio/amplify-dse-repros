/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBodyArea = /* GraphQL */ `
  query GetBodyArea($id: ID!) {
    getBodyArea(id: $id) {
      id
      key
      name
      symptoms_common {
        items {
          id
          bodyAreaID
          symptomID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      symptoms_all {
        items {
          id
          bodyAreaID
          symptomID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      body_parts {
        items {
          id
          key
          name
          body_area_id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listBodyAreas = /* GraphQL */ `
  query ListBodyAreas(
    $filter: ModelBodyAreaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBodyAreas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        key
        name
        symptoms_common {
          nextToken
          startedAt
        }
        symptoms_all {
          nextToken
          startedAt
        }
        body_parts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncBodyAreas = /* GraphQL */ `
  query SyncBodyAreas(
    $filter: ModelBodyAreaFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBodyAreas(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        key
        name
        symptoms_common {
          nextToken
          startedAt
        }
        symptoms_all {
          nextToken
          startedAt
        }
        body_parts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getBodyPart = /* GraphQL */ `
  query GetBodyPart($id: ID!) {
    getBodyPart(id: $id) {
      id
      key
      name
      symptoms_common {
        items {
          id
          bodyPartID
          symptomID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      symptoms_all {
        items {
          id
          bodyPartID
          symptomID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      body_area_id
      body_area {
        id
        key
        name
        symptoms_common {
          nextToken
          startedAt
        }
        symptoms_all {
          nextToken
          startedAt
        }
        body_parts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listBodyParts = /* GraphQL */ `
  query ListBodyParts(
    $filter: ModelBodyPartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBodyParts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        key
        name
        symptoms_common {
          nextToken
          startedAt
        }
        symptoms_all {
          nextToken
          startedAt
        }
        body_area_id
        body_area {
          id
          key
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncBodyParts = /* GraphQL */ `
  query SyncBodyParts(
    $filter: ModelBodyPartFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBodyParts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        key
        name
        symptoms_common {
          nextToken
          startedAt
        }
        symptoms_all {
          nextToken
          startedAt
        }
        body_area_id
        body_area {
          id
          key
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getSymptom = /* GraphQL */ `
  query GetSymptom($id: ID!) {
    getSymptom(id: $id) {
      id
      key
      name
      body_area_common {
        items {
          id
          bodyAreaID
          symptomID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      body_area_all {
        items {
          id
          bodyAreaID
          symptomID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      body_part_common {
        items {
          id
          bodyPartID
          symptomID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      body_part_all {
        items {
          id
          bodyPartID
          symptomID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listSymptoms = /* GraphQL */ `
  query ListSymptoms(
    $filter: ModelSymptomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSymptoms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        key
        name
        body_area_common {
          nextToken
          startedAt
        }
        body_area_all {
          nextToken
          startedAt
        }
        body_part_common {
          nextToken
          startedAt
        }
        body_part_all {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSymptoms = /* GraphQL */ `
  query SyncSymptoms(
    $filter: ModelSymptomFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSymptoms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        key
        name
        body_area_common {
          nextToken
          startedAt
        }
        body_area_all {
          nextToken
          startedAt
        }
        body_part_common {
          nextToken
          startedAt
        }
        body_part_all {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getBodyAreaSymptomCommon = /* GraphQL */ `
  query GetBodyAreaSymptomCommon($id: ID!) {
    getBodyAreaSymptomCommon(id: $id) {
      id
      bodyAreaID
      symptomID
      bodyArea {
        id
        key
        name
        symptoms_common {
          nextToken
          startedAt
        }
        symptoms_all {
          nextToken
          startedAt
        }
        body_parts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      symptom {
        id
        key
        name
        body_area_common {
          nextToken
          startedAt
        }
        body_area_all {
          nextToken
          startedAt
        }
        body_part_common {
          nextToken
          startedAt
        }
        body_part_all {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listBodyAreaSymptomCommons = /* GraphQL */ `
  query ListBodyAreaSymptomCommons(
    $filter: ModelBodyAreaSymptomCommonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBodyAreaSymptomCommons(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        bodyAreaID
        symptomID
        bodyArea {
          id
          key
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        symptom {
          id
          key
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncBodyAreaSymptomCommons = /* GraphQL */ `
  query SyncBodyAreaSymptomCommons(
    $filter: ModelBodyAreaSymptomCommonFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBodyAreaSymptomCommons(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        bodyAreaID
        symptomID
        bodyArea {
          id
          key
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        symptom {
          id
          key
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getBodyAreaSymptomAll = /* GraphQL */ `
  query GetBodyAreaSymptomAll($id: ID!) {
    getBodyAreaSymptomAll(id: $id) {
      id
      bodyAreaID
      symptomID
      bodyArea {
        id
        key
        name
        symptoms_common {
          nextToken
          startedAt
        }
        symptoms_all {
          nextToken
          startedAt
        }
        body_parts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      symptom {
        id
        key
        name
        body_area_common {
          nextToken
          startedAt
        }
        body_area_all {
          nextToken
          startedAt
        }
        body_part_common {
          nextToken
          startedAt
        }
        body_part_all {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listBodyAreaSymptomAlls = /* GraphQL */ `
  query ListBodyAreaSymptomAlls(
    $filter: ModelBodyAreaSymptomAllFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBodyAreaSymptomAlls(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        bodyAreaID
        symptomID
        bodyArea {
          id
          key
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        symptom {
          id
          key
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncBodyAreaSymptomAlls = /* GraphQL */ `
  query SyncBodyAreaSymptomAlls(
    $filter: ModelBodyAreaSymptomAllFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBodyAreaSymptomAlls(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        bodyAreaID
        symptomID
        bodyArea {
          id
          key
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        symptom {
          id
          key
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getBodyPartSymptomCommon = /* GraphQL */ `
  query GetBodyPartSymptomCommon($id: ID!) {
    getBodyPartSymptomCommon(id: $id) {
      id
      bodyPartID
      symptomID
      bodyPart {
        id
        key
        name
        symptoms_common {
          nextToken
          startedAt
        }
        symptoms_all {
          nextToken
          startedAt
        }
        body_area_id
        body_area {
          id
          key
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      symptom {
        id
        key
        name
        body_area_common {
          nextToken
          startedAt
        }
        body_area_all {
          nextToken
          startedAt
        }
        body_part_common {
          nextToken
          startedAt
        }
        body_part_all {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listBodyPartSymptomCommons = /* GraphQL */ `
  query ListBodyPartSymptomCommons(
    $filter: ModelBodyPartSymptomCommonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBodyPartSymptomCommons(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        bodyPartID
        symptomID
        bodyPart {
          id
          key
          name
          body_area_id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        symptom {
          id
          key
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncBodyPartSymptomCommons = /* GraphQL */ `
  query SyncBodyPartSymptomCommons(
    $filter: ModelBodyPartSymptomCommonFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBodyPartSymptomCommons(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        bodyPartID
        symptomID
        bodyPart {
          id
          key
          name
          body_area_id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        symptom {
          id
          key
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getBodyPartSymptomAll = /* GraphQL */ `
  query GetBodyPartSymptomAll($id: ID!) {
    getBodyPartSymptomAll(id: $id) {
      id
      bodyPartID
      symptomID
      bodyPart {
        id
        key
        name
        symptoms_common {
          nextToken
          startedAt
        }
        symptoms_all {
          nextToken
          startedAt
        }
        body_area_id
        body_area {
          id
          key
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      symptom {
        id
        key
        name
        body_area_common {
          nextToken
          startedAt
        }
        body_area_all {
          nextToken
          startedAt
        }
        body_part_common {
          nextToken
          startedAt
        }
        body_part_all {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listBodyPartSymptomAlls = /* GraphQL */ `
  query ListBodyPartSymptomAlls(
    $filter: ModelBodyPartSymptomAllFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBodyPartSymptomAlls(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        bodyPartID
        symptomID
        bodyPart {
          id
          key
          name
          body_area_id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        symptom {
          id
          key
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncBodyPartSymptomAlls = /* GraphQL */ `
  query SyncBodyPartSymptomAlls(
    $filter: ModelBodyPartSymptomAllFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBodyPartSymptomAlls(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        bodyPartID
        symptomID
        bodyPart {
          id
          key
          name
          body_area_id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        symptom {
          id
          key
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
