// Components
import { forwardRef } from "react";
import PrimaryBtn from "@/atoms/buttons/PrimaryBtn";
import Loading from "@/atoms/icon/Loading";

// Component
const LoadingBtn = fowardRef(({ isLoading, ...otherProps }) => (
   <PrimaryBtn />
))