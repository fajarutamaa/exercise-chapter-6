-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "Nama" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "Profile_picture" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "Address" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transactions" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,
    "Payment_link" TEXT NOT NULL,
    "Is_paid" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Transactions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Transactions" ADD CONSTRAINT "Transactions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
