package com.shift.shift.domain;

import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

public class SeatFilterSpecification {
    public static Specification<Seat> equalLevelId(Long levelId) {
        return new Specification<Seat>() {
            @Override
            public Predicate toPredicate(Root<Seat> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {
                return criteriaBuilder.equal(root.get("levelId"), levelId);
            }
        };
    }

    public static Specification<Seat> equalSection(String section) {
        return new Specification<Seat>() {
            @Override
            public Predicate toPredicate(Root<Seat> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {
                return criteriaBuilder.equal(root.get("section"), section);
            }
        };
    }

    public static Specification<Seat> equalRow(String row) {
        return new Specification<Seat>() {
            @Override
            public Predicate toPredicate(Root<Seat> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {
                return criteriaBuilder.equal(root.get("row"), row);
            }
        };
    }

    public static Specification<Seat> equalNum(String num) {
        return new Specification<Seat>() {
            @Override
            public Predicate toPredicate(Root<Seat> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {
                return criteriaBuilder.equal(root.get("num"), num);
            }
        };
    }
}
