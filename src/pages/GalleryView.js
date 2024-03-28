import React, { useState, useEffect } from "react";

import { Container } from "@mui/material";
import Gallery from "../components/Gallery";
import Description from "../components/Description";
import MobileGallery from "../components/MobileGallery";
import "../backdrop.css";

// Define the BackdropGallery component
const GalleryView = () => {
    return (
        <main className="App">
            <Container component="section" maxWidth={"lg"}>
                <section className="core">
                    <Gallery />
                    <MobileGallery />
                    <Description />
                </section>
            </Container>
        </main>
    );
};

export default GalleryView;
