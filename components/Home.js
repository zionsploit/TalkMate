import { Button, Card, TextField, Typography } from "@mui/material"
import SendIcon from '@mui/icons-material/Send'
import { signOut } from "next-auth/react"
import { useDispatch, useSelector } from "react-redux"
import { useRef, useState } from "react"
import { fetchMessage } from "../pages/app/reducers/sentMessageThunks"
function HomePage({ data }) {

    const getAccount = useSelector((state) => state.account.account)
    const valueRef = useRef();
    const [isMessage, setIsMessage] = useState({ ...getAccount })

    const dispatch = useDispatch()

    const handleSubmitButton = (e) => {
        dispatch(fetchMessage(isMessage))
        
    }
    return (
        <div>
            <Card raised={true} sx={{ display: "flex", flexFlow: "row nowrap" }}>
                <div style={{ backgroundColor: '#3a86ff', width: "20em" }}>
                    <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", marginTop: "5em" }}>
                        <div>
                            <img src={`${getAccount.image}`} width={200} height={200} style={{ borderRadius: "9999px", border: "1px solid white" }} />
                        </div>
                        <Typography align="center" variant="h6" sx={{ marginTop: "2em", fontWeight: "bold", color: 'white' }}>
                            {getAccount.name}
                        </Typography>
                        <Typography align="center" gutterBottom={true} sx={{ fontSize: "15px", fontWeight: "bold", color: 'white' }}>
                            {getAccount.email}
                        </Typography>
                    </div><hr style={{ padding: "1px", backgroundColor: "#495057", border: 'none' }} />
                    <Button variant="contained" color="secondary" onClick={() => signOut()} sx={{ margin: "10px" }}>
                        LOG OUT
                    </Button>
                </div>
                <div style={{ backgroundColor: '#ced4da', width: "30em" }}>
                    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100&' }}>
                        <div style={{ height: '100%', padding: "2px" }}>
                            <div style={{ padding: "5px", overflow: 'auto', height: "25em" }}>

                                {data.map(dataList => (
                                    <div style={{ display: "flex", flexDirection: `${getAccount.name === dataList.name ? 'row-reverse' : 'row'}`, justifyContent: "start", margin: "5px 0" }} key={dataList.email}>
                                        <img src={`${dataList.image}`} width={30} height={30} style={{ borderRadius: "9999px" }} />
                                        <div style={{ backgroundColor: '#ffffff', padding: "10px", width: "100%", margin: "0 5px", display: "flex", flexDirection: "column" }}>
                                            <Typography paragraph={true} sx={{ fontSize: "12px" }}>
                                                {dataList.message}
                                            </Typography>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                        <div style={{ width: "100%", display: 'flex', flexFlow: 'row nowrap', alignItems: 'center', margin: "5px 20px" }}>
                            <TextField label="Sent a Message" variant="outlined" color="primary" margin="dense" required={true} sx={{ width: "70%" }} onChange={(e) => setIsMessage({ ...getAccount, message: e.target.value })} />
                            <Button variant="contained" endIcon={<SendIcon />} sx={{ margin: "0 15px" }} onClick={handleSubmitButton}>
                                Send
                            </Button>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default HomePage