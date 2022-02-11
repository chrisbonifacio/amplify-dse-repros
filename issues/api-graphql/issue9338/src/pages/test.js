// Campaign Template
const template = {
  APNSMessage: {
    aps: {
      alert: "",
    },
  },
  GCMMessage: {
    data: {
      message: {
        body: "Some test message with the alert",
        title: "Testing",
      },
      "pinpoint.campaign.my_campaign": "{{my_campaign}}",
      "pinpoint.campaign.correlationId": "{{correlationId}}",
      "pinpoint.campaign.referenceId": "{{referenceId}}",
    },
  },
  ADMMessage: {
    data: {
      message: "",
    },
  },
};

// Lambda
("use strict");
const AWS = require("aws-sdk");
const appId = "<pinpoint app id>";
var pinpoint = new AWS.Pinpoint();
var params = {
  ApplicationId: appId,
  MessageRequest: {
    Addresses: {
      "<device token>": {
        ChannelType: "GCM",
        Substitutions: {
          my_campaign: ["FraudAlert"],
          correlationId: ["xyz-123"],
          referenceId: ["r1234"],
        },
      },
    },
    TemplateConfiguration: {
      PushTemplate: {
        Name: "PushNotificationTemplate",
      },
    },
  },
};

exports.handler = async (event) => {
  const request = pinpoint.sendMessages(params);
  return request.promise();
};
