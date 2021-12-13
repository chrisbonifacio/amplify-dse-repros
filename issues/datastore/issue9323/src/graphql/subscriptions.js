/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBodyArea = /* GraphQL */ `
  subscription OnCreateBodyArea {
    onCreateBodyArea {
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
export const onUpdateBodyArea = /* GraphQL */ `
  subscription OnUpdateBodyArea {
    onUpdateBodyArea {
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
export const onDeleteBodyArea = /* GraphQL */ `
  subscription OnDeleteBodyArea {
    onDeleteBodyArea {
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
export const onCreateBodyPart = /* GraphQL */ `
  subscription OnCreateBodyPart {
    onCreateBodyPart {
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
export const onUpdateBodyPart = /* GraphQL */ `
  subscription OnUpdateBodyPart {
    onUpdateBodyPart {
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
export const onDeleteBodyPart = /* GraphQL */ `
  subscription OnDeleteBodyPart {
    onDeleteBodyPart {
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
export const onCreateSymptom = /* GraphQL */ `
  subscription OnCreateSymptom {
    onCreateSymptom {
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
export const onUpdateSymptom = /* GraphQL */ `
  subscription OnUpdateSymptom {
    onUpdateSymptom {
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
export const onDeleteSymptom = /* GraphQL */ `
  subscription OnDeleteSymptom {
    onDeleteSymptom {
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
export const onCreateBodyAreaSymptomCommon = /* GraphQL */ `
  subscription OnCreateBodyAreaSymptomCommon {
    onCreateBodyAreaSymptomCommon {
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
export const onUpdateBodyAreaSymptomCommon = /* GraphQL */ `
  subscription OnUpdateBodyAreaSymptomCommon {
    onUpdateBodyAreaSymptomCommon {
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
export const onDeleteBodyAreaSymptomCommon = /* GraphQL */ `
  subscription OnDeleteBodyAreaSymptomCommon {
    onDeleteBodyAreaSymptomCommon {
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
export const onCreateBodyAreaSymptomAll = /* GraphQL */ `
  subscription OnCreateBodyAreaSymptomAll {
    onCreateBodyAreaSymptomAll {
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
export const onUpdateBodyAreaSymptomAll = /* GraphQL */ `
  subscription OnUpdateBodyAreaSymptomAll {
    onUpdateBodyAreaSymptomAll {
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
export const onDeleteBodyAreaSymptomAll = /* GraphQL */ `
  subscription OnDeleteBodyAreaSymptomAll {
    onDeleteBodyAreaSymptomAll {
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
export const onCreateBodyPartSymptomCommon = /* GraphQL */ `
  subscription OnCreateBodyPartSymptomCommon {
    onCreateBodyPartSymptomCommon {
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
export const onUpdateBodyPartSymptomCommon = /* GraphQL */ `
  subscription OnUpdateBodyPartSymptomCommon {
    onUpdateBodyPartSymptomCommon {
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
export const onDeleteBodyPartSymptomCommon = /* GraphQL */ `
  subscription OnDeleteBodyPartSymptomCommon {
    onDeleteBodyPartSymptomCommon {
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
export const onCreateBodyPartSymptomAll = /* GraphQL */ `
  subscription OnCreateBodyPartSymptomAll {
    onCreateBodyPartSymptomAll {
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
export const onUpdateBodyPartSymptomAll = /* GraphQL */ `
  subscription OnUpdateBodyPartSymptomAll {
    onUpdateBodyPartSymptomAll {
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
export const onDeleteBodyPartSymptomAll = /* GraphQL */ `
  subscription OnDeleteBodyPartSymptomAll {
    onDeleteBodyPartSymptomAll {
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
