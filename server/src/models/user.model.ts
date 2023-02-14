import {
  prop,
  getModelForClass,
  Severity,
  modelOptions,
  pre,
  DocumentType,
} from "@typegoose/typegoose";
const nanoid = import('nanoid')
import argon2 from "argon2";

@pre<User>("save", async function () {
  if (!this.isDirectModified("password")) {
    return;
  }

  const hash = await argon2.hash(this.password);
  this.password = hash;
})
@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})
export class User {
  @prop({ lowercase: true, required: true, unique: true })
  email: string;

  @prop({ required: true })
  firstName: string;

  @prop({ required: true })
  lastName: string;

  @prop({ required: true })
  password: string;

  @prop({
    required: true,
    default: () => {
      nanoid;
    },
  })
  verficationCode: string;

  @prop()
  passwordResetCode: string | null;

  @prop({ default: false })
  verified: boolean;

  async validatePassword(this: DocumentType<User>, candidatePassword: string) {
    try {
      return await argon2.verify(this.password, candidatePassword);
    } catch (e) {
      console.error(e, "Could not Validate password");
      return false;
    }
  }
}

const UserModel = getModelForClass(User);

export default UserModel;