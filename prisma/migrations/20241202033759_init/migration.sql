-- DropIndex
DROP INDEX `tbl_slide_image_key` ON `tbl_slide`;

-- AlterTable
ALTER TABLE `tbl_slide` MODIFY `image` VARCHAR(191) NULL;
