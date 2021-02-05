/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreateParticipantInput = {
  id?: string | null;
  name: string;
  point: number;
  answer: string;
  isGuest: boolean;
};

export type ModelParticipantConditionInput = {
  name?: ModelStringInput | null;
  point?: ModelIntInput | null;
  answer?: ModelStringInput | null;
  isGuest?: ModelBooleanInput | null;
  and?: Array<ModelParticipantConditionInput | null> | null;
  or?: Array<ModelParticipantConditionInput | null> | null;
  not?: ModelParticipantConditionInput | null;
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

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateParticipantInput = {
  id: string;
  name?: string | null;
  point?: number | null;
  answer?: string | null;
  isGuest?: boolean | null;
};

export type DeleteParticipantInput = {
  id?: string | null;
};

export type CreateQuestionInput = {
  id?: string | null;
  text?: string | null;
  level?: number | null;
};

export type ModelQuestionConditionInput = {
  text?: ModelStringInput | null;
  level?: ModelIntInput | null;
  and?: Array<ModelQuestionConditionInput | null> | null;
  or?: Array<ModelQuestionConditionInput | null> | null;
  not?: ModelQuestionConditionInput | null;
};

export type UpdateQuestionInput = {
  id: string;
  text?: string | null;
  level?: number | null;
};

export type DeleteQuestionInput = {
  id?: string | null;
};

export type CreateRandomQuestionInput = {
  id?: string | null;
  text?: string | null;
  level?: number | null;
};

export type ModelRandomQuestionConditionInput = {
  text?: ModelStringInput | null;
  level?: ModelIntInput | null;
  and?: Array<ModelRandomQuestionConditionInput | null> | null;
  or?: Array<ModelRandomQuestionConditionInput | null> | null;
  not?: ModelRandomQuestionConditionInput | null;
};

export type UpdateRandomQuestionInput = {
  id: string;
  text?: string | null;
  level?: number | null;
};

export type DeleteRandomQuestionInput = {
  id?: string | null;
};

export type ModelParticipantFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  point?: ModelIntInput | null;
  answer?: ModelStringInput | null;
  isGuest?: ModelBooleanInput | null;
  and?: Array<ModelParticipantFilterInput | null> | null;
  or?: Array<ModelParticipantFilterInput | null> | null;
  not?: ModelParticipantFilterInput | null;
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

export type ModelQuestionFilterInput = {
  id?: ModelIDInput | null;
  text?: ModelStringInput | null;
  level?: ModelIntInput | null;
  and?: Array<ModelQuestionFilterInput | null> | null;
  or?: Array<ModelQuestionFilterInput | null> | null;
  not?: ModelQuestionFilterInput | null;
};

export type ModelRandomQuestionFilterInput = {
  id?: ModelIDInput | null;
  text?: ModelStringInput | null;
  level?: ModelIntInput | null;
  and?: Array<ModelRandomQuestionFilterInput | null> | null;
  or?: Array<ModelRandomQuestionFilterInput | null> | null;
  not?: ModelRandomQuestionFilterInput | null;
};

export type CreateParticipantMutation = {
  __typename: "Participant";
  id: string;
  name: string;
  point: number;
  answer: string;
  isGuest: boolean;
  createdAt: string;
  updatedAt: string;
};

export type UpdateParticipantMutation = {
  __typename: "Participant";
  id: string;
  name: string;
  point: number;
  answer: string;
  isGuest: boolean;
  createdAt: string;
  updatedAt: string;
};

export type DeleteParticipantMutation = {
  __typename: "Participant";
  id: string;
  name: string;
  point: number;
  answer: string;
  isGuest: boolean;
  createdAt: string;
  updatedAt: string;
};

export type CreateQuestionMutation = {
  __typename: "Question";
  id: string;
  text: string | null;
  level: number | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateQuestionMutation = {
  __typename: "Question";
  id: string;
  text: string | null;
  level: number | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteQuestionMutation = {
  __typename: "Question";
  id: string;
  text: string | null;
  level: number | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateRandomQuestionMutation = {
  __typename: "RandomQuestion";
  id: string;
  text: string | null;
  level: number | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateRandomQuestionMutation = {
  __typename: "RandomQuestion";
  id: string;
  text: string | null;
  level: number | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteRandomQuestionMutation = {
  __typename: "RandomQuestion";
  id: string;
  text: string | null;
  level: number | null;
  createdAt: string;
  updatedAt: string;
};

export type GetParticipantQuery = {
  __typename: "Participant";
  id: string;
  name: string;
  point: number;
  answer: string;
  isGuest: boolean;
  createdAt: string;
  updatedAt: string;
};

export type ListParticipantsQuery = {
  __typename: "ModelParticipantConnection";
  items: Array<{
    __typename: "Participant";
    id: string;
    name: string;
    point: number;
    answer: string;
    isGuest: boolean;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetQuestionQuery = {
  __typename: "Question";
  id: string;
  text: string | null;
  level: number | null;
  createdAt: string;
  updatedAt: string;
};

export type ListQuestionsQuery = {
  __typename: "ModelQuestionConnection";
  items: Array<{
    __typename: "Question";
    id: string;
    text: string | null;
    level: number | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetRandomQuestionQuery = {
  __typename: "RandomQuestion";
  id: string;
  text: string | null;
  level: number | null;
  createdAt: string;
  updatedAt: string;
};

export type ListRandomQuestionsQuery = {
  __typename: "ModelRandomQuestionConnection";
  items: Array<{
    __typename: "RandomQuestion";
    id: string;
    text: string | null;
    level: number | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateParticipantSubscription = {
  __typename: "Participant";
  id: string;
  name: string;
  point: number;
  answer: string;
  isGuest: boolean;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateParticipantSubscription = {
  __typename: "Participant";
  id: string;
  name: string;
  point: number;
  answer: string;
  isGuest: boolean;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteParticipantSubscription = {
  __typename: "Participant";
  id: string;
  name: string;
  point: number;
  answer: string;
  isGuest: boolean;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateQuestionSubscription = {
  __typename: "Question";
  id: string;
  text: string | null;
  level: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateQuestionSubscription = {
  __typename: "Question";
  id: string;
  text: string | null;
  level: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteQuestionSubscription = {
  __typename: "Question";
  id: string;
  text: string | null;
  level: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateRandomQuestionSubscription = {
  __typename: "RandomQuestion";
  id: string;
  text: string | null;
  level: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateRandomQuestionSubscription = {
  __typename: "RandomQuestion";
  id: string;
  text: string | null;
  level: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteRandomQuestionSubscription = {
  __typename: "RandomQuestion";
  id: string;
  text: string | null;
  level: number | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateParticipant(
    input: CreateParticipantInput,
    condition?: ModelParticipantConditionInput
  ): Promise<CreateParticipantMutation> {
    const statement = `mutation CreateParticipant($input: CreateParticipantInput!, $condition: ModelParticipantConditionInput) {
        createParticipant(input: $input, condition: $condition) {
          __typename
          id
          name
          point
          answer
          isGuest
          createdAt
          updatedAt
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
    return <CreateParticipantMutation>response.data.createParticipant;
  }
  async UpdateParticipant(
    input: UpdateParticipantInput,
    condition?: ModelParticipantConditionInput
  ): Promise<UpdateParticipantMutation> {
    const statement = `mutation UpdateParticipant($input: UpdateParticipantInput!, $condition: ModelParticipantConditionInput) {
        updateParticipant(input: $input, condition: $condition) {
          __typename
          id
          name
          point
          answer
          isGuest
          createdAt
          updatedAt
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
    return <UpdateParticipantMutation>response.data.updateParticipant;
  }
  async DeleteParticipant(
    input: DeleteParticipantInput,
    condition?: ModelParticipantConditionInput
  ): Promise<DeleteParticipantMutation> {
    const statement = `mutation DeleteParticipant($input: DeleteParticipantInput!, $condition: ModelParticipantConditionInput) {
        deleteParticipant(input: $input, condition: $condition) {
          __typename
          id
          name
          point
          answer
          isGuest
          createdAt
          updatedAt
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
    return <DeleteParticipantMutation>response.data.deleteParticipant;
  }
  async CreateQuestion(
    input: CreateQuestionInput,
    condition?: ModelQuestionConditionInput
  ): Promise<CreateQuestionMutation> {
    const statement = `mutation CreateQuestion($input: CreateQuestionInput!, $condition: ModelQuestionConditionInput) {
        createQuestion(input: $input, condition: $condition) {
          __typename
          id
          text
          level
          createdAt
          updatedAt
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
    return <CreateQuestionMutation>response.data.createQuestion;
  }
  async UpdateQuestion(
    input: UpdateQuestionInput,
    condition?: ModelQuestionConditionInput
  ): Promise<UpdateQuestionMutation> {
    const statement = `mutation UpdateQuestion($input: UpdateQuestionInput!, $condition: ModelQuestionConditionInput) {
        updateQuestion(input: $input, condition: $condition) {
          __typename
          id
          text
          level
          createdAt
          updatedAt
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
    return <UpdateQuestionMutation>response.data.updateQuestion;
  }
  async DeleteQuestion(
    input: DeleteQuestionInput,
    condition?: ModelQuestionConditionInput
  ): Promise<DeleteQuestionMutation> {
    const statement = `mutation DeleteQuestion($input: DeleteQuestionInput!, $condition: ModelQuestionConditionInput) {
        deleteQuestion(input: $input, condition: $condition) {
          __typename
          id
          text
          level
          createdAt
          updatedAt
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
    return <DeleteQuestionMutation>response.data.deleteQuestion;
  }
  async CreateRandomQuestion(
    input: CreateRandomQuestionInput,
    condition?: ModelRandomQuestionConditionInput
  ): Promise<CreateRandomQuestionMutation> {
    const statement = `mutation CreateRandomQuestion($input: CreateRandomQuestionInput!, $condition: ModelRandomQuestionConditionInput) {
        createRandomQuestion(input: $input, condition: $condition) {
          __typename
          id
          text
          level
          createdAt
          updatedAt
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
    return <CreateRandomQuestionMutation>response.data.createRandomQuestion;
  }
  async UpdateRandomQuestion(
    input: UpdateRandomQuestionInput,
    condition?: ModelRandomQuestionConditionInput
  ): Promise<UpdateRandomQuestionMutation> {
    const statement = `mutation UpdateRandomQuestion($input: UpdateRandomQuestionInput!, $condition: ModelRandomQuestionConditionInput) {
        updateRandomQuestion(input: $input, condition: $condition) {
          __typename
          id
          text
          level
          createdAt
          updatedAt
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
    return <UpdateRandomQuestionMutation>response.data.updateRandomQuestion;
  }
  async DeleteRandomQuestion(
    input: DeleteRandomQuestionInput,
    condition?: ModelRandomQuestionConditionInput
  ): Promise<DeleteRandomQuestionMutation> {
    const statement = `mutation DeleteRandomQuestion($input: DeleteRandomQuestionInput!, $condition: ModelRandomQuestionConditionInput) {
        deleteRandomQuestion(input: $input, condition: $condition) {
          __typename
          id
          text
          level
          createdAt
          updatedAt
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
    return <DeleteRandomQuestionMutation>response.data.deleteRandomQuestion;
  }
  async GetParticipant(id: string): Promise<GetParticipantQuery> {
    const statement = `query GetParticipant($id: ID!) {
        getParticipant(id: $id) {
          __typename
          id
          name
          point
          answer
          isGuest
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetParticipantQuery>response.data.getParticipant;
  }
  async ListParticipants(
    filter?: ModelParticipantFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListParticipantsQuery> {
    const statement = `query ListParticipants($filter: ModelParticipantFilterInput, $limit: Int, $nextToken: String) {
        listParticipants(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            point
            answer
            isGuest
            createdAt
            updatedAt
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
    return <ListParticipantsQuery>response.data.listParticipants;
  }
  async GetQuestion(id: string): Promise<GetQuestionQuery> {
    const statement = `query GetQuestion($id: ID!) {
        getQuestion(id: $id) {
          __typename
          id
          text
          level
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetQuestionQuery>response.data.getQuestion;
  }
  async ListQuestions(
    filter?: ModelQuestionFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListQuestionsQuery> {
    const statement = `query ListQuestions($filter: ModelQuestionFilterInput, $limit: Int, $nextToken: String) {
        listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            text
            level
            createdAt
            updatedAt
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
    return <ListQuestionsQuery>response.data.listQuestions;
  }
  async GetRandomQuestion(id: string): Promise<GetRandomQuestionQuery> {
    const statement = `query GetRandomQuestion($id: ID!) {
        getRandomQuestion(id: $id) {
          __typename
          id
          text
          level
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetRandomQuestionQuery>response.data.getRandomQuestion;
  }
  async ListRandomQuestions(
    filter?: ModelRandomQuestionFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListRandomQuestionsQuery> {
    const statement = `query ListRandomQuestions($filter: ModelRandomQuestionFilterInput, $limit: Int, $nextToken: String) {
        listRandomQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            text
            level
            createdAt
            updatedAt
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
    return <ListRandomQuestionsQuery>response.data.listRandomQuestions;
  }
  OnCreateParticipantListener: Observable<
    SubscriptionResponse<OnCreateParticipantSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateParticipant {
        onCreateParticipant {
          __typename
          id
          name
          point
          answer
          isGuest
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateParticipantSubscription>>;

  OnUpdateParticipantListener: Observable<
    SubscriptionResponse<OnUpdateParticipantSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateParticipant {
        onUpdateParticipant {
          __typename
          id
          name
          point
          answer
          isGuest
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateParticipantSubscription>>;

  OnDeleteParticipantListener: Observable<
    SubscriptionResponse<OnDeleteParticipantSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteParticipant {
        onDeleteParticipant {
          __typename
          id
          name
          point
          answer
          isGuest
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteParticipantSubscription>>;

  OnCreateQuestionListener: Observable<
    SubscriptionResponse<OnCreateQuestionSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateQuestion {
        onCreateQuestion {
          __typename
          id
          text
          level
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateQuestionSubscription>>;

  OnUpdateQuestionListener: Observable<
    SubscriptionResponse<OnUpdateQuestionSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateQuestion {
        onUpdateQuestion {
          __typename
          id
          text
          level
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateQuestionSubscription>>;

  OnDeleteQuestionListener: Observable<
    SubscriptionResponse<OnDeleteQuestionSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteQuestion {
        onDeleteQuestion {
          __typename
          id
          text
          level
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteQuestionSubscription>>;

  OnCreateRandomQuestionListener: Observable<
    SubscriptionResponse<OnCreateRandomQuestionSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateRandomQuestion {
        onCreateRandomQuestion {
          __typename
          id
          text
          level
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateRandomQuestionSubscription>>;

  OnUpdateRandomQuestionListener: Observable<
    SubscriptionResponse<OnUpdateRandomQuestionSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateRandomQuestion {
        onUpdateRandomQuestion {
          __typename
          id
          text
          level
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateRandomQuestionSubscription>>;

  OnDeleteRandomQuestionListener: Observable<
    SubscriptionResponse<OnDeleteRandomQuestionSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteRandomQuestion {
        onDeleteRandomQuestion {
          __typename
          id
          text
          level
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteRandomQuestionSubscription>>;
}
