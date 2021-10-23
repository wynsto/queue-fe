import * as React from "react";
import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";

export function QueueForm(props) {
    const onFormChange = props.onFormChange
    return (
        <FormControl
            label={() => "Queue Name"}
            caption={() => "Please input a name"}
            >
            <Input
                onChange={e => onFormChange(e.target.value)}
                value={props.queueName}
            />
        </FormControl>
    )
}