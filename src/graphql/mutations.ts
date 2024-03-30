import gql from "graphql-tag";

export const UPDATE_USER_MUTATION = gql `
    # The ! after the type means that it is required
    mutation UpdateUser($input: UpdateOneUserInput!) {
        # call the updateOneUser mutation with the input and pass the $input argument
        updateOneUser(input: $input) {
            id
            name
            avatarUrl
            email
            phone
            jobTitle
        } 
    }
`;
