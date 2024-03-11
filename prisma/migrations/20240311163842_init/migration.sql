-- CreateTable
CREATE TABLE "Contact" (
    "id" TEXT NOT NULL,
    "userid" TEXT NOT NULL,
    "keyid" TEXT NOT NULL,
    "expired" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);
