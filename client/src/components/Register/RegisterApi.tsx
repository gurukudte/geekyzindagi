import axios from "axios";

type CreateUserResponse = {
  id: number;
  email: string;
  password: string;
};

async function createUser(id: number, email: string, password: string) {
  try {
    console.log("from createUser");

    const { data } = await axios.post<CreateUserResponse>(
      "http://localhost:3001/register",
      { id: id, email: email, password: password },
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
