/*
  Warnings:

  - You are about to drop the `slide` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `slide`;

-- CreateTable
CREATE TABLE `tbl_slide` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `image` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `tbl_slide_image_key`(`image`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
