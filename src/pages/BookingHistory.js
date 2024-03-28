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
} from "../pages/redux/action/bookingActions";

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useParams } from "react-router-dom";
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

const TABLE_HEAD = ["Member", "Time", "Guest", "Phone", "Status"];

export default function BookingHistory() {
    const dispatch = useDispatch();

    // const { id } = useParams();
    const id = localStorage.getItem("userid");
    // console.log(id);
    function accept(e) {
        const id = e.target.value;
        // const id1 = e.target.name;

        console.log(id);
        dispatch(AcceptBookings({ id: id }));
    }
    const { bookings } = useSelector((state) => state.bookingsReducer);
    // console.log(bookings);
    useEffect(() => {
        dispatch(getAllBookings());
    }, []);

    return (
        <main className=" h-screen banner">
            <div className="max-w-screen-xl py-20 mx-auto px-6">
                <div className="">
                    <div className="col-span-1">
                        <div className="glass p-6 box-border rounded-lg">
                            <CardBody className="overflow-scroll px-0">
                            <center><h1>Your Booking History</h1></center>
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
                                        {bookings
                                            .filter(
                                                (book) => book.user_id === id
                                            )
                                            .map(
                                                (
                                                    {
                                                        name,
                                                        email,
                                                        phone,
                                                        status,
                                                        reject,
                                                        booking_date,
                                                        booking_time,
                                                        _id,
                                                        guest
                                                    },
                                                    index
                                                ) => {
                                                    const isLast =
                                                        index ===
                                                        bookings.length - 1;
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
                                                                            {
                                                                                name
                                                                            }
                                                                        </Typography>
                                                                        <Typography
                                                                            variant="small"
                                                                            color="blue-gray"
                                                                            className="font-normal opacity-70"
                                                                        >
                                                                            {
                                                                                email
                                                                            }
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
                                                                        {
                                                                            booking_time
                                                                        }{" "}
                                                                        -{" "}
                                                                        {
                                                                            booking_date
                                                                        }
                                                                    </Typography>
                                                                    <Typography
                                                                        variant="small"
                                                                        color="blue-gray"
                                                                        className="font-normal opacity-70"
                                                                    >
                                                                        {
                                                                            booking_date
                                                                        }
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
                                                                            {
                                                                                guest
                                                                            }
                                                                        </Typography>
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
                                                                    {phone}
                                                                </Typography>
                                                            </td>
                                                            <td
                                                                className={
                                                                    classes
                                                                }
                                                            >
                                                                <div className="w-max">
                                                                    <Chip
                                                                        variant="ghost"
                                                                        size="sm"
                                                                        value={
                                                                            status ===
                                                                            "1"
                                                                                ? "Accepted"
                                                                                :(reject==="0")? "Pending":"Rejected"
                                                                        }
                                                                        color={
                                                                            status ===
                                                                            "1"
                                                                                ? "green"
                                                                                : (reject==="0")?"blue-gray":"red"
                                                                        }
                                                                    />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    );
                                                }
                                            )}
                                    </tbody>
                                </table>
                            </CardBody>
                            
                        </div>
                        Your booking will be confirm by resturent owner
                    </div>
                </div>
            </div>
        </main>
    );
}
