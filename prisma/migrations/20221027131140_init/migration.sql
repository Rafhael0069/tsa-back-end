-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "userFirstName" TEXT NOT NULL,
    "userLastName" TEXT NOT NULL,
    "userNickName" TEXT,
    "userEmail" TEXT NOT NULL,
    "birthDate" TEXT NOT NULL,
    "userPassword" TEXT NOT NULL,
    "imageAdrress" TEXT DEFAULT '',
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "level" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Admin" (
    "id" TEXT NOT NULL,
    "adminName" TEXT NOT NULL,
    "adminEmail" TEXT NOT NULL,
    "adminPassword" TEXT NOT NULL,
    "adminImageAdrress" TEXT DEFAULT '',
    "level" INTEGER NOT NULL DEFAULT 3,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Requisition" (
    "id" TEXT NOT NULL,
    "idUser" TEXT NOT NULL,
    "status" BOOLEAN DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Requisition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "idUser" TEXT NOT NULL,
    "postTitle" TEXT NOT NULL,
    "postDescription" TEXT NOT NULL,
    "postImage" TEXT DEFAULT '',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_userEmail_key" ON "User"("userEmail");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_id_key" ON "Admin"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_adminEmail_key" ON "Admin"("adminEmail");

-- CreateIndex
CREATE UNIQUE INDEX "Requisition_id_key" ON "Requisition"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Requisition_idUser_key" ON "Requisition"("idUser");

-- CreateIndex
CREATE UNIQUE INDEX "Post_id_key" ON "Post"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Post_idUser_key" ON "Post"("idUser");
