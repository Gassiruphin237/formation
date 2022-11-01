import React from "react";
import { Dialog } from '@headlessui/react'
import Detail from "./Detail";

class ModalDetail extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            item : null,
            open: false
        }
        this.close = this.close.bind(this)
        this.open = this.open.bind(this)
    }

    // componentDidMount() {


    // }

    close() {
        this.setState({
            item:null,
            open: false
        })
    }
    open(item) {
        this.setState({
            item:item,
            open: true
        })
    }
    render() {
        return (
            <Dialog
                open={this.state.open}
                onClose={() =>
                    this.setState({
                        open: false
                    })}
                className="relative z-50"
            >
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <Dialog.Panel className="w-full max-w-sm rounded bg-white">
                        <Dialog.Title>Complete your order</Dialog.Title>
                        <Detail onClose={this.close} pokemon = {this.state.item} />
                    </Dialog.Panel>
                </div>
            </Dialog>
        )
    }
}
export default ModalDetail;