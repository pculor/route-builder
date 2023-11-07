import styled from "styled-components";

export const StyledList = styled.ul`
    list-style: none;
    padding: 0;
    li {
        color: ${({ theme }) => theme.colors.white};
        overflow: hidden;
        margin-bottom: 20px;
        z-index: 1;
        position: relative;
        border: 1px solid transparent;
        padding: 5px;

        &.isDragging {
            -webkit-grabbing: '-webkit-grab';
            color: ${({ theme }) => theme.colors.white};
            background-color: ${({ theme }) => theme.gradient.GREEN};
            opacity: 0.4;
        }

        &.isDraggedIn {
            border: 1px dashed ${({ theme }) => theme.colors.white};
        }
    }

    .bars {
        display: inline-block;
        cursor: move;
      }

    .title {
        font-weight: bold;
        font-size: 18px;
        margin-left: 15px;
    }
    .icon {
        width: 25px;
        height: 25px;
        color: ${({ theme }) => theme.colors.grey};
      }
      
`;