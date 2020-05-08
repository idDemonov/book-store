import { connect } from "react-redux";
import { CardListPresent } from "./card-list-present";

const mapStateToProps = ({ cardBooks }) => ({ cardBooks });

export const CardListContainer = connect(mapStateToProps)(CardListPresent);
