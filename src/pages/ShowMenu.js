import {
    MagnifyingGlassIcon,
    ChevronUpDownIcon,
    ArrowRightIcon,
    CheckIcon,
} from "@heroicons/react/24/outline";

import { PencilIcon, UserPlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import {
    Card,
    CardHeader,
    Input,
    Typography,
    Button,
    CardBody,
    Chip,
    CardFooter,
    Tabs,
    TabsHeader,
    Tab,
    Avatar,
    IconButton,
    Tooltip,
} from "@material-tailwind/react";

import {
    getAllBookings,
    AcceptBookings,
    RejectBookings,
} from "../pages/redux/action/bookingActions";

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
    deleteMenu,
    editMenu,
    getAllMenus,
} from "../pages/redux/action/menuAction";
import OrderCard from "../components/PlaceOrder/OrderCard";
import { CiEdit } from "react-icons/ci";
const TABS = [
    {
        label: "All",
        value: "all",
    },
    {
        label: "Monitored",
        value: "monitored",
    },
    {
        label: "Unmonitored",
        value: "unmonitored",
    },
];

const TABLE_HEAD = ["Image", "Name", "Desciption", "Catagory", "Price", ""];

export default function ShowMenu() {
    const { hotelid } = useParams();
    // console.log(hotelid);
    var dispatch = useDispatch();

    const id = localStorage.getItem("userid");

    const { menus } = useSelector((state) => state.menuReducer);

    useEffect(() => {
        dispatch(getAllMenus());
    }, []);


    function accept(e) {
        const id1 = e.target.value;
        var booking1;
        menus
            .filter((book) => book._id === id1)
            .map((booking) => {
                booking1 = booking;
            });
        if (booking1) {
            dispatch(AcceptBookings(booking1));
        }
    }

    return (
        <main className=" h-screen banner">
            <div className="max-w-screen-xl py-20 mx-auto px-6">
                <div className="">
                    <div className="col-span-1">
                    
                        <div className="glass p-6 box-border rounded-lg">
                            {/* <div className=" flex flex-col space-y-3 h-64 overflow-y-scroll orderContainer ">
                                {bookings.map((item) => (
                                    <OrderCard key={item._id} {...item} />
                                ))}
                            </div> */}
                            
                            <CardBody className="overflow-scroll px-0">
                                <table className="mt-4 w-full min-w-max table-auto text-left">
                                    <thead>
                                        <tr>
                                            {TABLE_HEAD.map((head, index) => (
                                                <th
                                                    key={head}
                                                    className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                                                >
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                                                    >
                                                        {head}{" "}
                                                        {index !==
                                                            TABLE_HEAD.length -
                                                                1 && (
                                                            <ChevronUpDownIcon
                                                                strokeWidth={2}
                                                                className="h-4 w-4"
                                                            />
                                                        )}
                                                    </Typography>
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {menus
                                            .filter(
                                                (menu) =>
                                                    menu.res_id === hotelid
                                            )
                                            .map(
                                                (
                                                    {
                                                        name,
                                                        description,
                                                        price,
                                                        image,
                                                        catagory,
                                                        _id,
                                                    },
                                                    index
                                                ) => {
                                                    const isLast =
                                                        index ===
                                                        menus.length - 1;
                                                    const classes = isLast
                                                        ? "p-4"
                                                        : "p-4 border-b border-blue-gray-50";

                                                    return (
                                                        <tr key={name}>
                                                            <td
                                                                className={
                                                                    classes
                                                                }
                                                            >
                                                                <div className="flex items-center gap-3">
                                                                    {/* <Avatar src={img} alt={name} size="sm" /> */}
                                                                    <div className="flex flex-col">
                                                                        <Typography
                                                                            variant="small"
                                                                            color="blue-gray"
                                                                            className="font-normal"
                                                                        >
                                                                            <img
                                                                                src={
                                                                                    image
                                                                                }
                                                                                style={{
                                                                                    maxWidth: 150,
                                                                                    maxHeight: 150,
                                                                                }}
                                                                                alt="invalide"
                                                                            ></img>
                                                                        </Typography>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td
                                                                className={
                                                                    classes
                                                                }
                                                            >
                                                                <div className="flex flex-col">
                                                                    <Typography
                                                                        variant="small"
                                                                        color="blue-gray"
                                                                        className="font-normal"
                                                                    >
                                                                        {name}{" "}
                                                                    </Typography>
                                                                </div>
                                                            </td>
                                                            <td
                                                                className={
                                                                    classes
                                                                }
                                                            >
                                                                <div className="flex flex-col">
                                                                    <Typography
                                                                        variant="small"
                                                                        color="blue-gray"
                                                                        className="font-normal"
                                                                    >
                                                                        {
                                                                            description
                                                                        }{" "}
                                                                    </Typography>
                                                                </div>
                                                            </td>
                                                            <td
                                                                className={
                                                                    classes
                                                                }
                                                            >
                                                                <div className="flex flex-col">
                                                                    <Typography
                                                                        variant="small"
                                                                        color="blue-gray"
                                                                        className="font-normal"
                                                                    >
                                                                        {
                                                                            catagory
                                                                        }{" "}
                                                                    </Typography>
                                                                </div>
                                                            </td>
                                                            <td
                                                                className={
                                                                    classes
                                                                }
                                                            >
                                                                <Typography
                                                                    variant="small"
                                                                    color="blue-gray"
                                                                    className="font-normal"
                                                                >
                                                                    {price}
                                                                </Typography>
                                                            </td>
                                                            <td
                                                                className={
                                                                    classes
                                                                }
                                                            >
                                                                <>
                                                                    <Tooltip content="Accept User">
                                                                        <IconButton
                                                                            variant="text"
                                                                            value={
                                                                                _id
                                                                            }
                                                                            onClick={(
                                                                                e
                                                                            ) => {
                                                                                window.location=`/editmenu/${_id}`
                                                                            }}
                                                                        >
                                                                            {/* <PencilIcon className="h-4 w-4" /> */}
                                                                            <CiEdit className="h-4 w-4" />
                                                                            {/* <TrashIcon className="h-4 w-4"/> */}
                                                                        </IconButton>
                                                                    </Tooltip>
                                                                    <Tooltip content="Reject User">
                                                                        <IconButton
                                                                            variant="text"
                                                                            onClick={(
                                                                                e
                                                                            ) => {
                                                                                dispatch(
                                                                                    deleteMenu(
                                                                                        {
                                                                                            _id,
                                                                                        }
                                                                                    )
                                                                                );
                                                                            }}
                                                                        >
                                                                            {/* <PencilIcon className="h-4 w-4" /> */}
                                                                            {/* <CheckIcon className="h-4 w-4"/> */}
                                                                            <TrashIcon
                                                                                className="h-4 w-4"
                                                                                name={
                                                                                    _id
                                                                                }
                                                                            />
                                                                        </IconButton>
                                                                    </Tooltip>
                                                                </>
                                                            </td>
                                                        </tr>
                                                    );
                                                }
                                            )}
                                    </tbody>
                                </table>
                            </CardBody>
                            <div className="flex flex-col"><button onClick={(e)=>window.location=`/addmenu/${hotelid}`} className="self-end mt-4 mr-8 bg-blue-500 text-white px-4 py-2 rounded">add menu</button></div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
