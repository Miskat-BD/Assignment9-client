"use client";
import { Calendar } from "@gravity-ui/icons";
import { DateField, Label } from "@heroui/react";


const DateFilter = ({title}) => {
    return (
        <div className="mb-5">
            <DateField className="w-[256px]" name="date">
                <Label>{title}</Label>
                <DateField.Group>
                    <DateField.Prefix>
                        <Calendar className="size-4 text-muted" />
                    </DateField.Prefix>
                    <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                </DateField.Group>
            </DateField>
        </div>
    );
};

export default DateFilter;