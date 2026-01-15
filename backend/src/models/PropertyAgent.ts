class PropertyAgent {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    mobileNumber: string
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.mobileNumber = mobileNumber;
    const now = new Date();
    this.createdAt = now;
    this.updatedAt = now;
  }
}

module.exports = { PropertyAgent };
