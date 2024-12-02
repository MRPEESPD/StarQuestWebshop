"use client"

import React, { useEffect, useState } from "react"
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Http } from "@/app/utils/Http"
import Image from "next/image"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { FaPlus } from "react-icons/fa6";
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import toast from "react-hot-toast"

export const columns = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "id",
        header: "ID",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("id")}</div>
        ),
    },
    {
        accessorKey: "image",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    รูปภาพ
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="lowercase"><Image src={row.getValue("image")} alt='image' className="rounded-md" width={300} height={300} /></div>,
    },
    {
        id: "actions",
        enableHiding: false,
        header: () => <div className="">แก้ไข</div>,
        cell: ({ row }) => {

            const [imageEdit, setImageEdit] = useState("")
            const editSlideImage = async () => {
                try {
                    await Http.post('/api/getSlideImageId', {
                        id: row.getValue("id")
                    }).then((res) => {
                        setImageEdit(res.data.slide.image)
                    }).catch((error) => {
                        console.log(error)
                    })
                } catch (error) {
                    console.log(error)
                }
            }

            const handleEdit = async (e) => {
                e.preventDefault()

                try {
                    if (!imageEdit) {
                        toast.error("กรุณาอย่าเว้นช่องว่าง")
                        setTimeout(() => {
                            location.reload()
                        }, 1500);
                        return
                    }

                    if (imageEdit.startsWith("https://img2.pic.in.th/")) {
                        return await Http.post('/api/editImage', {
                            image: imageEdit,
                            id: row.getValue("id")
                        }).then((res) => {
                            toast.success("แก้ไขสำเร็จ !!")
                            setTimeout(() => {
                                location.reload()
                            }, 1500);
                        }).catch((error) => {
                            console.log(error)
                        })
                    } else if (imageEdit.startsWith("https://img5.pic.in.th/")) {
                        return await Http.post('/api/editImage', {
                            image: imageEdit,
                            id: row.getValue("id")
                        }).then((res) => {
                            toast.success("แก้ไขสำเร็จ !!")
                            setTimeout(() => {
                                location.reload()
                            }, 1500);
                        }).catch((error) => {
                            console.log(error)
                        })
                    } else {
                        return toast.error("URL ไม่ถูกต้อง")
                    }

                } catch (error) {
                    console.log(error)
                }
            }



            return (
                <>
                    <Dialog>
                        <DialogTrigger asChild><button type="button" className="bg-yellow-400 px-2 py-1 rounded-md hover:scale-105 duration-200 transition-all"><span className="flex items-center" onClick={() => editSlideImage()}><FaPencilAlt />&nbsp;แก้ไข</span></button></DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>แก้ไข</DialogTitle>
                                <DialogDescription asChild>
                                    <div className="mt-4">
                                        <form onSubmit={handleEdit}>
                                            <div className="mb-6">
                                                <label>รูปภาพ URL</label>
                                                <input onChange={(e) => setImageEdit(e.target.value)} value={imageEdit} type="text" placeholder="Image URL" className='border w-full py-1.5 rounded-md px-3 outline-none focus:border-[#87a525]' />
                                            </div>
                                            <button className="outline-none bg-[#87a525] py-1.5 px-3 rounded-md text-white w-full">แก้ไข</button>
                                        </form>
                                    </div>
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </>
            )
        },
    },
    {
        id: "action",
        enableHiding: false,
        header: () => <div className="">ลบ</div>,
        cell: ({ row }) => {
            const deleteSlideImage = async () => {
                try {
                    await Http.post('/api/deleteSlideImage', {
                        id: row.getValue("id")
                    }).then((res) => {
                        toast.success("ลบข้อมูลสำเร็จ !!")
                        setTimeout(() => {
                            location.reload()
                        }, 1500);
                    }).catch((error) => {
                        console.log(error)
                    })
                } catch (error) {
                    console.log(error)
                }
            }
            return (
                <>
                    <button type="button" className="bg-red-500 px-2 py-1 rounded-md hover:scale-105 duration-200 text-white transition-all"><span className="flex items-center" onClick={() => deleteSlideImage()}><FaTrash />&nbsp;ลบ</span></button>
                </>
            )
        },
    }
]

export default function Slide() {
    const [data, setData] = useState([]);  // ใช้ state เพื่อเก็บข้อมูลที่ได้จาก API
    const [sorting, setSorting] = useState([]);
    const [columnFilters, setColumnFilters] = useState([]);
    const [columnVisibility, setColumnVisibility] = useState({});
    const [rowSelection, setRowSelection] = useState({});

    const [image, setImage] = useState("")



    const handleAddImge = async (e) => {
        e.preventDefault()

        try {
            if (!image) {
                toast.error("กรุณาอย่าเว้นช่องว่าง")
                setTimeout(() => {
                    location.reload()
                }, 1500);
                return
            }

            if (image.startsWith("https://img2.pic.in.th/")) {
                return await Http.post('/api/addImage', {
                    image: image
                }).then((res) => {
                    toast.success("เพิ่มข้อมูลสำเร็จ !!")
                    setTimeout(() => {
                        location.reload()
                    }, 1500);
                }).catch((error) => {
                    console.log(error)
                })
            } else if (image.startsWith("https://img5.pic.in.th/")) {
                return await Http.post('/api/addImage', {
                    image: image
                }).then((res) => {
                    toast.success("เพิ่มข้อมูลสำเร็จ !!")
                    setTimeout(() => {
                        location.reload()
                    }, 1500);
                }).catch((error) => {
                    console.log(error)
                })
            } else {
                return toast.error("URL ไม่ถูกต้อง")
            }

        } catch (error) {
            console.log(error)
        }
    }

    // ดึงข้อมูลจาก API
    useEffect(() => {
        const fetchData = async () => {
            const response = await Http.get('/api/slideImage')
            const resultData = response.data.slideInfo.map((item) => ({
                id: item.id,
                image: item.image,
            }));
            setData(resultData);  // เก็บข้อมูลที่ได้ใน state
        };

        fetchData();
    }, []);

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    });

    return (
        <div className="flex justify-center">
            <div className="w-4/6 bg-white p-6 rounded-md">
                <div className="flex justify-between">
                    <h1>จัดการภาพสไลด์</h1>
                    <Dialog>
                        <DialogTrigger asChild><button className="flex outline-none items-center bg-[#87a525] py-1.5 px-3 text-white rounded-md transition-all duration-200 hover:bg-[#4a7c2a]"><span className="flex items-center"><FaPlus />&nbsp;เพิ่มรูปภาพ</span></button></DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>เพิ่มรูปภาพ</DialogTitle>
                                <DialogDescription asChild>
                                    <div className="mt-4">
                                        <form onSubmit={handleAddImge}>
                                            <div className="mb-6">
                                                <label>รูปภาพ URL</label>
                                                <input onChange={(e) => setImage(e.target.value)} type="text" placeholder="Image URL" className='border w-full py-1.5 rounded-md px-3 outline-none focus:border-[#87a525]' />
                                            </div>
                                            <button className="outline-none bg-[#87a525] py-1.5 px-3 rounded-md text-white w-full">เพิ่มรูปภาพ</button>
                                        </form>
                                    </div>
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </div>
                <div className="rounded-md border mt-6">
                    <Table>
                        <TableHeader>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    ))}
                                </TableRow>
                            ))}
                        </TableHeader>
                        <TableBody>
                            {table.getRowModel().rows.length ? (
                                table.getRowModel().rows.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        data-state={row.getIsSelected() && "selected"}
                                    >
                                        {row.getVisibleCells().map((cell) => (
                                            <TableCell key={cell.id}>
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell
                                        colSpan={columns.length}
                                        className="h-24 text-center"
                                    >
                                        ไม่พบข้อมูลที่ค้นหา
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
                <div className="flex items-center justify-end space-x-2 py-4">
                    <div className="flex-1 text-sm text-muted-foreground">
                        {table.getFilteredSelectedRowModel().rows.length} of{" "}
                        {table.getFilteredRowModel().rows.length} row(s) selected.
                    </div>
                    <div className="space-x-2">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => table.previousPage()}
                            disabled={!table.getCanPreviousPage()}
                        >
                            ย้อนกลับ
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => table.nextPage()}
                            disabled={!table.getCanNextPage()}
                        >
                            ถัดไป
                        </Button>
                    </div>
                </div>
            </div>
        </div>

    );
}
