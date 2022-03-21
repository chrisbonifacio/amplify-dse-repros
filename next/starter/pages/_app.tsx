import type { AppProps } from "next/app";
import { Amplify, API, DataStore, syncExpression } from "aws-amplify";
// import { Analytics, AWSKinesisProvider } from "@aws-amplify/analytics";
import { AmplifyProvider } from "@aws-amplify/ui-react";
import awsconfig from "../src/aws-exports";

import "../styles/globals.css";
import Script from "next/script";
import Head from "next/head";

Amplify.configure(awsconfig);

// Analytics.addPluggable(new AWSKinesisProvider());
// Analytics.configure({
//   AWSKinesis: {
//     region: awsconfig.aws_project_region,
//   },
// });

// DataStore.configure({
//   syncExpressions: [
//     syncExpression(Todo, () => {
//       return (todo) => todo.name("eq", "test");
//     }),
//   ],
// });

// let streamName = "events-" + awsconfig.aws_user_files_s3_bucket.split("-")[1];

// Analytics.record(
//   {
//     data: {
//       name: "testing 123"
//     },
//     streamName,
//   },
//   "AWSKinesis"
// );

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script id="cloudwatchRUM" strategy="lazyOnload">
        {`(function(n,i,v,r,s,c,x,z){x=window.AwsRumClient={q:[],n:n,i:i,v:v,r:r,c:c};window[n]=function(c,p){x.q.push({c:c,p:p});};z=document.createElement('script');z.async=true;z.src=s;document.head.insertBefore(z,document.head.getElementsByTagName('script')[0]);})('cwr','208e3ba0-c91c-4d5a-b4ff-8c2354953e02','1.0.0','us-east-1','https://client.rum.us-east-1.amazonaws.com/1.2.1/cwr.js',{sessionSampleRate:1,guestRoleArn:"arn:aws:iam::123710206839:role/RUM-Monitor-us-east-1-123710206839-8774108887461-Unauth",identityPoolId:"us-east-1:afcbacf5-7887-4a32-8c3f-0f2ee7a6eda5",endpoint:"https://dataplane.rum.us-east-1.amazonaws.com",telemetries:["performance","errors","http"],allowCookies:true,enableXRay:false})`}
      </Script>
      <AmplifyProvider>
        <Component {...pageProps} />
      </AmplifyProvider>
    </>
  );
}
