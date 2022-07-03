import React, { useContext, useState, useEffect } from "react";
import MapView from "react-native-maps";
import styled from "styled-components/native";
import { Search } from "../components/search.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

const Map = styled(MapView)`
    height: 100%
    width: 100%
`;

export const MapScreen = () => (
  <>
    <Search />
    <Map />
  </>
);
