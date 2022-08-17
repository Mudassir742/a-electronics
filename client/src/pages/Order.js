import { useRef, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
// material
import {
  Card,
  Table,
  Stack,
  Select,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  MenuItem,
  FormControl,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import { useQueryClient, useMutation, useQuery } from "react-query";

// components
import Page from "../components/Page";
import Scrollbar from "../components/Scrollbar";
import Iconify from "../components/Iconify";
//import Label from "../components/Label";
import { TableListHead, TableListToolbar } from "../sections/@dashboard/Table";
import orderInstance from "src/axios/orderInstance";

const TABLE_HEAD = [
  { id: "no", label: "No#", alignRight: false },
  { id: "name", label: "Name", alignRight: false },
  { id: "payment", label: "Payment", alignRight: false },
  { id: "status", label: "Status", alignRight: false },
  { id: "amount", label: "Amount", alignRight: false },
  { id: "date", label: "Expected Delivery", alignRight: false },
  { id: "location", label: "City/State", alignRight: false },
];

// -------------------------------Style Components-----------------------------------

// -----------------------------------------------------------------------------------

export default function Orders() {
  const queryClient = useQueryClient();
  const {
    data: orderList = [],
    isLoading,
    isRefetching,
  } = useQuery("orders", async () => {
    const orderResponse = await orderInstance.get("/get-order");
    return orderResponse.data.data;
  });

  const handleStatusChange = useMutation(
    async ({ status, orderId }) => {
      console.log(status, orderId);
      const orderResponse = await orderInstance.put(
        `/update-order-status/${orderId}`,
        {
          status,
        }
      );
      return orderResponse.data.data;
    },
    {
      onSuccess: (data) => {
        console.log(data);
        queryClient.setQueryData("orders", data);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  const compareStatus = (value, index) => {
    return parseInt(value.split(" ")[0]) > index ? true : false;
  };

  return (
    <>
      <Page title="Order">
        <Container>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            mb={5}
          >
            <Typography variant="h4" gutterBottom>
              Orders
            </Typography>
          </Stack>
          <Card>
            <Scrollbar>
              <TableListToolbar />
              <TableContainer sx={{ minWidth: 800 }}>
                <Table>
                  <TableListHead headLabel={TABLE_HEAD} />
                  <TableBody>
                    {orderList.map((order, index) => (
                      <TableRow hover key={order._id}>
                        <TableCell component="th" scope="row" padding="normal">
                          <Typography variant="subtitle3" noWrap>
                            {index + 1}
                          </Typography>
                        </TableCell>
                        <TableCell component="th" scope="row" padding="normal">
                          <Typography variant="subtitle3" noWrap>
                            {`${order?.customerId.firstName} ${order?.customerId.lastName}`}
                          </Typography>
                        </TableCell>
                        <TableCell component="th" scope="row" padding="normal">
                          <Typography variant="subtitle3" noWrap>
                            {order?.paymentType}
                          </Typography>
                        </TableCell>
                        <TableCell component="th" scope="row" padding="normal">
                          <FormControl fullWidth>
                            <Select
                              value={order?.orderStatus}
                              name="status"
                              size="small"
                              onChange={(e) =>
                                handleStatusChange.mutate({
                                  status: e.target.value,
                                  orderId: order._id,
                                })
                              }
                              disabled={isLoading || isRefetching}
                            >
                              <MenuItem
                                value="0 pending"
                                disabled={compareStatus(order?.orderStatus, 0)}
                              >
                                Pending
                              </MenuItem>
                              <MenuItem
                                value="1 placed"
                                disabled={compareStatus(order?.orderStatus, 1)}
                              >
                                Placed
                              </MenuItem>
                              <MenuItem
                                value="2 packing"
                                disabled={compareStatus(order?.orderStatus, 2)}
                              >
                                Packing
                              </MenuItem>
                              <MenuItem
                                value="3 dispatched"
                                disabled={compareStatus(order?.orderStatus, 3)}
                              >
                                Dispatched
                              </MenuItem>
                              <MenuItem
                                value="4 Delivered"
                                disabled={compareStatus(order?.orderStatus, 4)}
                              >
                                Delivered
                              </MenuItem>
                            </Select>
                          </FormControl>
                        </TableCell>
                        <TableCell component="th" scope="row" padding="normal">
                          <Typography variant="subtitle3" noWrap>
                            {order?.amount}
                          </Typography>
                        </TableCell>
                        <TableCell component="th" scope="row" padding="normal">
                          <Typography variant="subtitle3" noWrap>
                            {order?.deliveryDate}
                          </Typography>
                        </TableCell>
                        <TableCell component="th" scope="row" padding="normal">
                          <Typography variant="subtitle3" noWrap>
                            {order?.ip}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Scrollbar>
          </Card>
        </Container>
      </Page>
    </>
  );
}
