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
// import { getAllHotels } from "../pages/redux/action/hotelActions";
import OrderCard from "../components/PlaceOrder/OrderCard";
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

const TABLE_HEAD = ["Member", "Time", "Status", "Phone", ""];

export default function SortableTable() {
    const { hotelid } = useParams();
    var dispatch = useDispatch();

    const id = localStorage.getItem("userid");

    const { bookings } = useSelector((state) => state.bookingsReducer);
    // const { hotels } = useSelector((state) => state.hotelsReducer);
    // console.log(bookings);
    useEffect(() => {
        // dispatch(getAllHotels());
        dispatch(getAllBookings());
    }, []);

    // var hotel1, booking1;
    // var hotel, hotelid;

    // if (hotels) {
    //     hotels.map((hotel) => {
    //         if (JSON.stringify(hotel.own_id) === id) {
    //             hotel1 = hotel;
    //         }
    //     });
    //     if (hotel1) {
    //         hotelid = hotel1._id;
    //         console.log(hotelid);
    //     }
    // }

    function accept(e) {
        const id1 = e.target.value;
        var booking1;
        bookings
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
                                        {bookings
                                            .filter(
                                                (book) =>
                                                    book.own_id === hotelid
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
                                                                <div className="w-max">
                                                                    <Chip
                                                                        variant="ghost"
                                                                        size="sm"
                                                                        value={
                                                                            status ===
                                                                            "1"
                                                                                ? "Accepted"
                                                                                : reject ===
                                                                                  "0"
                                                                                ? "Pending"
                                                                                : "Rejected"
                                                                        }
                                                                        color={
                                                                            status ===
                                                                            "1"
                                                                                ? "green"
                                                                                : reject ===
                                                                                  "0"
                                                                                ? "blue-gray"
                                                                                : "red"
                                                                        }
                                                                    />
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
                                                                    {phone}
                                                                </Typography>
                                                            </td>
                                                            <td
                                                                className={
                                                                    classes
                                                                }
                                                            >
                                                                {console.log(
                                                                    status,
                                                                    reject
                                                                )}
                                                                {status === "0" &&
                                                                    reject ===
                                                                        "0" && (
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
                                                                                        dispatch(
                                                                                            AcceptBookings(
                                                                                                {
                                                                                                    name,
                                                                                                    email,
                                                                                                    phone,
                                                                                                    status,
                                                                                                    booking_date,
                                                                                                    booking_time,
                                                                                                    _id,
                                                                                                }
                                                                                            )
                                                                                        );
                                                                                    }}
                                                                                >
                                                                                    {/* <PencilIcon className="h-4 w-4" /> */}
                                                                                    <CheckIcon className="h-4 w-4" />
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
                                                                                            RejectBookings(
                                                                                                {
                                                                                                    name,
                                                                                                    email,
                                                                                                    phone,
                                                                                                    status,
                                                                                                    booking_date,
                                                                                                    booking_time,
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
                                                                    )}
                                                            </td>
                                                        </tr>
                                                    );
                                                }
                                            )}
                                    </tbody>
                                </table>
                            </CardBody>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
