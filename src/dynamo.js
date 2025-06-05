import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, ScanCommand, PutCommand } from "@aws-sdk/lib-dynamodb";

const TABLE = "library";

const client = new DynamoDBClient({
  region: import.meta.env.VITE_AWS_REGION,
  credentials: {
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_ID,
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_KEY,
  },
});

const docClient = DynamoDBDocumentClient.from(client);

export async function scanBooks() {
  const params = await docClient.send(
    new ScanCommand({
      TableName: TABLE,
    })
  );
  return Items || [];
}
export async function addBook(book) {
  await docClient.send(new PutCommand({ TableName: TABLE, Item: book }));
}
