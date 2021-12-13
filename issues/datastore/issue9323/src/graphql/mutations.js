/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBodyArea = /* GraphQL */ `
  mutation CreateBodyArea(
    $input: CreateBodyAreaInput!
    $condition: ModelBodyAreaConditionInput
  ) {
    createBodyArea(input: $input, condition: $condition) {
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
export const updateBodyArea = /* GraphQL */ `
  mutation UpdateBodyArea(
    $input: UpdateBodyAreaInput!
    $condition: ModelBodyAreaConditionInput
  ) {
    updateBodyArea(input: $input, condition: $condition) {
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
export const deleteBodyArea = /* GraphQL */ `
  mutation DeleteBodyArea(
    $input: DeleteBodyAreaInput!
    $condition: ModelBodyAreaConditionInput
  ) {
    deleteBodyArea(input: $input, condition: $condition) {
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
export const createBodyPart = /* GraphQL */ `
  mutation CreateBodyPart(
    $input: CreateBodyPartInput!
    $condition: ModelBodyPartConditionInput
  ) {
    createBodyPart(input: $input, condition: $condition) {
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
export const updateBodyPart = /* GraphQL */ `
  mutation UpdateBodyPart(
    $input: UpdateBodyPartInput!
    $condition: ModelBodyPartConditionInput
  ) {
    updateBodyPart(input: $input, condition: $condition) {
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
export const deleteBodyPart = /* GraphQL */ `
  mutation DeleteBodyPart(
    $input: DeleteBodyPartInput!
    $condition: ModelBodyPartConditionInput
  ) {
    deleteBodyPart(input: $input, condition: $condition) {
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
export const createSymptom = /* GraphQL */ `
  mutation CreateSymptom(
    $input: CreateSymptomInput!
    $condition: ModelSymptomConditionInput
  ) {
    createSymptom(input: $input, condition: $condition) {
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
export const updateSymptom = /* GraphQL */ `
  mutation UpdateSymptom(
    $input: UpdateSymptomInput!
    $condition: ModelSymptomConditionInput
  ) {
    updateSymptom(input: $input, condition: $condition) {
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
export const deleteSymptom = /* GraphQL */ `
  mutation DeleteSymptom(
    $input: DeleteSymptomInput!
    $condition: ModelSymptomConditionInput
  ) {
    deleteSymptom(input: $input, condition: $condition) {
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
export const createBodyAreaSymptomCommon = /* GraphQL */ `
  mutation CreateBodyAreaSymptomCommon(
    $input: CreateBodyAreaSymptomCommonInput!
    $condition: ModelBodyAreaSymptomCommonConditionInput
  ) {
    createBodyAreaSymptomCommon(input: $input, condition: $condition) {
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
export const updateBodyAreaSymptomCommon = /* GraphQL */ `
  mutation UpdateBodyAreaSymptomCommon(
    $input: UpdateBodyAreaSymptomCommonInput!
    $condition: ModelBodyAreaSymptomCommonConditionInput
  ) {
    updateBodyAreaSymptomCommon(input: $input, condition: $condition) {
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
export const deleteBodyAreaSymptomCommon = /* GraphQL */ `
  mutation DeleteBodyAreaSymptomCommon(
    $input: DeleteBodyAreaSymptomCommonInput!
    $condition: ModelBodyAreaSymptomCommonConditionInput
  ) {
    deleteBodyAreaSymptomCommon(input: $input, condition: $condition) {
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
export const createBodyAreaSymptomAll = /* GraphQL */ `
  mutation CreateBodyAreaSymptomAll(
    $input: CreateBodyAreaSymptomAllInput!
    $condition: ModelBodyAreaSymptomAllConditionInput
  ) {
    createBodyAreaSymptomAll(input: $input, condition: $condition) {
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
export const updateBodyAreaSymptomAll = /* GraphQL */ `
  mutation UpdateBodyAreaSymptomAll(
    $input: UpdateBodyAreaSymptomAllInput!
    $condition: ModelBodyAreaSymptomAllConditionInput
  ) {
    updateBodyAreaSymptomAll(input: $input, condition: $condition) {
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
export const deleteBodyAreaSymptomAll = /* GraphQL */ `
  mutation DeleteBodyAreaSymptomAll(
    $input: DeleteBodyAreaSymptomAllInput!
    $condition: ModelBodyAreaSymptomAllConditionInput
  ) {
    deleteBodyAreaSymptomAll(input: $input, condition: $condition) {
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
export const createBodyPartSymptomCommon = /* GraphQL */ `
  mutation CreateBodyPartSymptomCommon(
    $input: CreateBodyPartSymptomCommonInput!
    $condition: ModelBodyPartSymptomCommonConditionInput
  ) {
    createBodyPartSymptomCommon(input: $input, condition: $condition) {
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
export const updateBodyPartSymptomCommon = /* GraphQL */ `
  mutation UpdateBodyPartSymptomCommon(
    $input: UpdateBodyPartSymptomCommonInput!
    $condition: ModelBodyPartSymptomCommonConditionInput
  ) {
    updateBodyPartSymptomCommon(input: $input, condition: $condition) {
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
export const deleteBodyPartSymptomCommon = /* GraphQL */ `
  mutation DeleteBodyPartSymptomCommon(
    $input: DeleteBodyPartSymptomCommonInput!
    $condition: ModelBodyPartSymptomCommonConditionInput
  ) {
    deleteBodyPartSymptomCommon(input: $input, condition: $condition) {
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
export const createBodyPartSymptomAll = /* GraphQL */ `
  mutation CreateBodyPartSymptomAll(
    $input: CreateBodyPartSymptomAllInput!
    $condition: ModelBodyPartSymptomAllConditionInput
  ) {
    createBodyPartSymptomAll(input: $input, condition: $condition) {
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
export const updateBodyPartSymptomAll = /* GraphQL */ `
  mutation UpdateBodyPartSymptomAll(
    $input: UpdateBodyPartSymptomAllInput!
    $condition: ModelBodyPartSymptomAllConditionInput
  ) {
    updateBodyPartSymptomAll(input: $input, condition: $condition) {
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
export const deleteBodyPartSymptomAll = /* GraphQL */ `
  mutation DeleteBodyPartSymptomAll(
    $input: DeleteBodyPartSymptomAllInput!
    $condition: ModelBodyPartSymptomAllConditionInput
  ) {
    deleteBodyPartSymptomAll(input: $input, condition: $condition) {
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
