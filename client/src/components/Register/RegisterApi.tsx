import axios from "axios";

type CreateUserResponse = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

async function createUser(email: string, password: string ,firstName:string,lastName:string) {
  try {
    console.log("from createUser API");

    const { data } = await axios.post<CreateUserResponse>(
      "http://localhost:1337/register",
      {email: email, password: password , firstName:firstName, lastName:lastName },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    console.table(data);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      // 👇️ error: AxiosError<any, any>
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}

export default createUser;
