import React from "react";


export const InputsWithRegisterMethods = ({ children, methods }) => {
	return (
		React.Children.map(children, (child) => {
			if (!React.isValidElement(child)) return child;

			if (child.props.name) {
				return React.createElement(child.type, { ...child.props, register: methods.register, key: child.props.name });
			}

			if (child.props.children) {
				return React.createElement(child.type, { ...child.props }, <InputsWithRegisterMethods {...{ children: child.props.children, methods }} />);
			}

			return child;
		})
	);
};