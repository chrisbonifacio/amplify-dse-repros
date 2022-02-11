/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateIssueComment: OnCreateIssueCommentSubscription;
  onUpdateIssueComment: OnUpdateIssueCommentSubscription;
  onDeleteIssueComment: OnDeleteIssueCommentSubscription;
};

export type CreateIssueCommentInput = {
  id?: string | null;
  issueID: string;
  createdAt?: string | null;
  updatedAt?: string | null;
  author?: string | null;
  comment?: string | null;
};

export type ModelIssueCommentConditionInput = {
  issueID?: ModelIDInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  author?: ModelStringInput | null;
  comment?: ModelStringInput | null;
  and?: Array<ModelIssueCommentConditionInput | null> | null;
  or?: Array<ModelIssueCommentConditionInput | null> | null;
  not?: ModelIssueCommentConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type IssueComment = {
  __typename: "IssueComment";
  id: string;
  issueID: string;
  createdAt?: string | null;
  updatedAt?: string | null;
  author?: string | null;
  comment?: string | null;
};

export type UpdateIssueCommentInput = {
  id: string;
  issueID?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  author?: string | null;
  comment?: string | null;
};

export type DeleteIssueCommentInput = {
  id: string;
};

export type ModelIssueCommentFilterInput = {
  id?: ModelIDInput | null;
  issueID?: ModelIDInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  author?: ModelStringInput | null;
  comment?: ModelStringInput | null;
  and?: Array<ModelIssueCommentFilterInput | null> | null;
  or?: Array<ModelIssueCommentFilterInput | null> | null;
  not?: ModelIssueCommentFilterInput | null;
};

export type ModelIssueCommentConnection = {
  __typename: "ModelIssueCommentConnection";
  items: Array<IssueComment | null>;
  nextToken?: string | null;
};

export type CreateIssueCommentMutation = {
  __typename: "IssueComment";
  id: string;
  issueID: string;
  createdAt?: string | null;
  updatedAt?: string | null;
  author?: string | null;
  comment?: string | null;
};

export type UpdateIssueCommentMutation = {
  __typename: "IssueComment";
  id: string;
  issueID: string;
  createdAt?: string | null;
  updatedAt?: string | null;
  author?: string | null;
  comment?: string | null;
};

export type DeleteIssueCommentMutation = {
  __typename: "IssueComment";
  id: string;
  issueID: string;
  createdAt?: string | null;
  updatedAt?: string | null;
  author?: string | null;
  comment?: string | null;
};

export type GetIssueCommentQuery = {
  __typename: "IssueComment";
  id: string;
  issueID: string;
  createdAt?: string | null;
  updatedAt?: string | null;
  author?: string | null;
  comment?: string | null;
};

export type ListIssueCommentsQuery = {
  __typename: "ModelIssueCommentConnection";
  items: Array<{
    __typename: "IssueComment";
    id: string;
    issueID: string;
    createdAt?: string | null;
    updatedAt?: string | null;
    author?: string | null;
    comment?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateIssueCommentSubscription = {
  __typename: "IssueComment";
  id: string;
  issueID: string;
  createdAt?: string | null;
  updatedAt?: string | null;
  author?: string | null;
  comment?: string | null;
};

export type OnUpdateIssueCommentSubscription = {
  __typename: "IssueComment";
  id: string;
  issueID: string;
  createdAt?: string | null;
  updatedAt?: string | null;
  author?: string | null;
  comment?: string | null;
};

export type OnDeleteIssueCommentSubscription = {
  __typename: "IssueComment";
  id: string;
  issueID: string;
  createdAt?: string | null;
  updatedAt?: string | null;
  author?: string | null;
  comment?: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateIssueComment(
    input: CreateIssueCommentInput,
    condition?: ModelIssueCommentConditionInput
  ): Promise<CreateIssueCommentMutation> {
    const statement = `mutation CreateIssueComment($input: CreateIssueCommentInput!, $condition: ModelIssueCommentConditionInput) {
        createIssueComment(input: $input, condition: $condition) {
          __typename
          id
          issueID
          createdAt
          updatedAt
          author
          comment
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateIssueCommentMutation>response.data.createIssueComment;
  }
  async UpdateIssueComment(
    input: UpdateIssueCommentInput,
    condition?: ModelIssueCommentConditionInput
  ): Promise<UpdateIssueCommentMutation> {
    const statement = `mutation UpdateIssueComment($input: UpdateIssueCommentInput!, $condition: ModelIssueCommentConditionInput) {
        updateIssueComment(input: $input, condition: $condition) {
          __typename
          id
          issueID
          createdAt
          updatedAt
          author
          comment
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateIssueCommentMutation>response.data.updateIssueComment;
  }
  async DeleteIssueComment(
    input: DeleteIssueCommentInput,
    condition?: ModelIssueCommentConditionInput
  ): Promise<DeleteIssueCommentMutation> {
    const statement = `mutation DeleteIssueComment($input: DeleteIssueCommentInput!, $condition: ModelIssueCommentConditionInput) {
        deleteIssueComment(input: $input, condition: $condition) {
          __typename
          id
          issueID
          createdAt
          updatedAt
          author
          comment
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteIssueCommentMutation>response.data.deleteIssueComment;
  }
  async GetIssueComment(id: string): Promise<GetIssueCommentQuery> {
    const statement = `query GetIssueComment($id: ID!) {
        getIssueComment(id: $id) {
          __typename
          id
          issueID
          createdAt
          updatedAt
          author
          comment
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetIssueCommentQuery>response.data.getIssueComment;
  }
  async ListIssueComments(
    filter?: ModelIssueCommentFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListIssueCommentsQuery> {
    const statement = `query ListIssueComments($filter: ModelIssueCommentFilterInput, $limit: Int, $nextToken: String) {
        listIssueComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            issueID
            createdAt
            updatedAt
            author
            comment
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListIssueCommentsQuery>response.data.listIssueComments;
  }
  OnCreateIssueCommentListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateIssueComment">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateIssueComment {
        onCreateIssueComment {
          __typename
          id
          issueID
          createdAt
          updatedAt
          author
          comment
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateIssueComment">>
  >;

  OnUpdateIssueCommentListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateIssueComment">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateIssueComment {
        onUpdateIssueComment {
          __typename
          id
          issueID
          createdAt
          updatedAt
          author
          comment
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateIssueComment">>
  >;

  OnDeleteIssueCommentListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteIssueComment">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteIssueComment {
        onDeleteIssueComment {
          __typename
          id
          issueID
          createdAt
          updatedAt
          author
          comment
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteIssueComment">>
  >;
}
