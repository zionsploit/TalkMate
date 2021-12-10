import { getSession, signIn, useSession } from "next-auth/react"
import styles from '../styles/Home.module.css'
import GoogleIcon from '@mui/icons-material/Google';
import { Button, Card, CardContent, Typography } from "@mui/material"
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setAccount } from "./app/reducers/accountReducer";
import HomePage from "../components/Home";
import getMessage from "./api/getMessage";

export default function Home({ dataList }) {

  const { data: session } = useSession()

  const dispatch = useDispatch()

  useEffect(() => {
    if (session) dispatch(setAccount(session.user))
  }, [session])

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.loginContainer}>
          {!session && (
            <>
              <Card sx={{ minWidth: 275, }} raised={true}>
                <CardContent sx={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
                  <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom={true} noWrap={true} variant="h6">
                    TALKMATE.PH
                  </Typography>
                  <Button variant="contained" startIcon={<GoogleIcon />} onClick={() => signIn("google")}>
                    LOGIN WITH GOOGLE
                  </Button>
                </CardContent>
              </Card>
            </>
          )}
          {session && (
            <>
              <HomePage data={dataList} />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(ctx) {
  return {
    props: {
      session: await getSession(ctx),
      dataList: await getMessage() ?? {}
    }
  }
}