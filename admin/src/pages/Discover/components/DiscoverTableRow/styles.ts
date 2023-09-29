// TODO
// @ts-nocheck
import styled from "styled-components";
import { Link } from "@strapi/design-system/Link";
import { Tr } from "@strapi/design-system/Table";

export const TableLink = styled(Link)`
  display: block;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const TrCustom = styled(Tr)`
  cursor: pointer;
`;
