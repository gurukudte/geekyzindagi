import axios from "axios";
import UserRegister from "../../modal";

type CreateUserResponse = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

async function createUser(user: UserRegister) {
  try {
    console.log("from createUser API");

    const { data } = await axios.post<CreateUserResponse>(
      "http://localhost:1337/api/user",
      {
        email: user.email,
        password: user.password,
        passwordConfirmation: user.password,
        firstName: user.fistName,
        lastName: user.lastName,
      },
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
