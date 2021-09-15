import React, { useState, useEffect } from "react";
import { Segment, Divider, Grid, Image } from 'semantic-ui-react'

export default function ComplaintsGen({index, complaint}){

    return(
        <div>

                <Grid padded>
                    <Grid.Column width={4}>
                        <Image size='medium' src='https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png'/>
                    </Grid.Column>
                    <Grid.Column width={9}>
                        <Segment>
                            <b>Student {index + 1} Says:</b>
                            <p>
                                {complaint}
                            </p>
                        </Segment>
                    </Grid.Column>
                    
                </Grid>
            <Divider />
        </div>
    )
}
