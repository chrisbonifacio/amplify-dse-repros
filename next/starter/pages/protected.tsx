import { withSSRContext } from "aws-amplify";
import { NextPage, GetServerSidePropsContext } from "next";
import { CognitoUserInterface } from "@aws-amplify/ui-components";

const Protected: NextPage = (props) => {
  const { email } = props as any;
  return <p>Logged In As {email}</p>;
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { req, res } = context;
  const { Auth } = withSSRContext({ req });
  try {
    const user =
      (await Auth.currentAuthenticatedUser()) as CognitoUserInterface;
    return {
      props: {
        authenticated: true,
        email: user.attributes?.email,
      },
    };
  } catch (err) {
    res.writeHead(302, { Location: "/" });
    res.end();
  }
  return { props: { authenticated: false, email: null } };
};

export default Protected;
